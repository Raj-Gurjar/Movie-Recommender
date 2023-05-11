from flask import Flask, render_template,request,flash
import pickle,requests
import joblib

# Provide template folder name
# The default folder name should be "templates" else need to mention custom folder name
app = Flask(__name__, template_folder='templates',
            static_folder='static')
app.secret_key = "abc"  

# movies = pickle.load(open('movie_l.pkl','rb'))
#movies = joblib.load('ML_part/movie_list.pkl')
movies = pickle.load(open('ML_part/movie_list.pkl','rb'))
similarity = pickle.load(open('ML_part/similarity.pkl','rb'))
mv = pickle.load(open('ML_part/castcrew.pkl','rb'))

def getcast(movie_id):
    movie_row = mv[mv['movie_id'] == movie_id]

    # extract the cast and crew information from the row
    cast = (movie_row['cast'].values[0])
    listToStr = ' '.join([str(elem) + ',' for i,elem in enumerate(cast)])
    
    print(cast)
    crew = str(movie_row['crew'].values[0])
    crew.replace("'", "")
    return (listToStr[:-1],crew[2:-2])

def getm(movie):
    index = movies[movies['title'] == movie].index[0]
    movie_i = movies.iloc[index].movie_id
    url = "https://api.themoviedb.org/3/movie/{}?api_key=8265bd1679663a7ea12ac168da84d2e8&language=en-US".format(movie_i)
    data = requests.get(url)
    data = data.json()
    company_names = [company['name'] for company in data['production_companies']]
    return (data['release_date'].split("-")[0],company_names)

def rating(movie):
    index = movies[movies['title'] == movie].index[0]
    movie_i = movies.iloc[index].movie_id
    url = "https://api.themoviedb.org/3/movie/{}?api_key=8265bd1679663a7ea12ac168da84d2e8&language=en-US".format(movie_i)
    data = requests.get(url)
    data = data.json()
    genres = [genre['name'] for genre in data['genres']]
    return (round(float(data['vote_average']), 2),data['release_date'],genres,data['homepage'])

def detail(movie_id):
    url = "https://api.themoviedb.org/3/movie/{}?api_key=8265bd1679663a7ea12ac168da84d2e8&language=en-US".format(movie_id)
    data = requests.get(url)
    data = data.json()
    genres = [genre['name'] for genre in data['genres']]
    vote = round(float(data['vote_average']), 2)
    return (data['overview'],data['homepage'],', '.join(genres),data['runtime'],vote)


def fetch_poster(movie_id):
    url = "https://api.themoviedb.org/3/movie/{}?api_key=8265bd1679663a7ea12ac168da84d2e8&language=en-US".format(movie_id)
    data = requests.get(url)
    data = data.json()
    poster_path = data['poster_path']
    full_path = "https://image.tmdb.org/t/p/w500/" + poster_path
    return full_path

# function to return movie names and poster of top five similar movies got through model we built
def recommend(movie):
    index = movies[movies['title'] == movie].index[0]
    movie_i = movies.iloc[index].movie_id
    mp=fetch_poster(movie_i)
    overview,homepage,genres,rev,vote=detail(movie_i)
    cast,crew = getcast(movie_i)
    distances = sorted(list(enumerate(similarity[index])), reverse=True, key=lambda x: x[1])
    recommended_movie_names = []
    recommended_movie_posters = []
    for i in distances[1:6]:
        # fetch the movie poster
        movie_id = movies.iloc[i[0]].movie_id
        recommended_movie_posters.append(fetch_poster(movie_id))
        recommended_movie_names.append(movies.iloc[i[0]].title)
    return recommended_movie_names,recommended_movie_posters,overview,homepage,genres,rev,vote,mp,cast,crew


@app.route('/', methods=["GET","POST"])
def index():
    if request.method == "POST":
      try:
            movie = request.form.get("search")
            if(len(movie) < 1):
                return render_template('movie.html')
            recommended_movie_names,recommended_movie_posters,overview,homepage,genres,rev,vote,mp,cast,crew = recommend(movie)
            raj= getm(movie)
            ratings= [rating(movie) for movie in recommended_movie_names]
            return render_template('movie.html',names=recommended_movie_names,posters=recommended_movie_posters,over=overview,homep=homepage,gen=genres,cur_m=movie,rev=rev,vote=vote,rating=ratings,mp=mp,raj=raj,cast=cast,crew=crew)

      except:
          flash("Movie not available")  
          return render_template('home.html')

    flash("Movie not available") 
    return render_template('home.html')

@app.route('/nest/<string:movie>', methods=["GET","POST"])
def nest(movie):
    if request.method == "POST":
        try:
            movie1 = request.form.get("search")
            if movie1:
                if(len(movie) < 1):
                   return render_template('home.html')
                recommended_movie_names,recommended_movie_posters,overview,homepage,genres,rev,vote,mp,cast,crew = recommend(movie)
                raj= getm(movie)
                ratings= [rating(movie) for movie in recommended_movie_names]
                return render_template('movie.html',names=recommended_movie_names,posters=recommended_movie_posters,over=overview,homep=homepage,gen=genres,cur_m=movie,rev=rev,vote=vote,rating=ratings,mp=mp,raj=raj,cast=cast,crew=crew)

            else:
                if not movie:
                   return render_template('home.html')
                recommended_movie_names, recommended_movie_posters, overview, homepage, genres, rev, vote, mp,cast,crew = recommend(movie)
                raj= getm(movie)
                ratings = [rating(movie) for movie in recommended_movie_names]
                return render_template('movie.html', names=recommended_movie_names, posters=recommended_movie_posters,
                                    over=overview, homep=homepage, gen=genres, cur_m=movie, rev=rev, vote=vote,
                                    rating=ratings, mp=mp,raj=raj, cast=cast, crew=crew)

        except:
            flash("Movie not available")  
            return render_template('home.html')
        
@app.route('/nest', methods=["GET","POST"])
def test():
    return render_template('home.html')


if __name__ == '__main__':
    app.run(debug=True)