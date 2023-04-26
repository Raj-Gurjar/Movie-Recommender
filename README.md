# Movie-Recommender
This is a Movie Recomendation System made by using NLP(Natural Language Processing ML alogorithm) with an UI made on Streamlit.

-> Libraries/Packages to be installed ;

Numpy
Pandas
NLTK
Streamlit
skLearn
Pickel
-> DataSet from Kaggle; https://www.kaggle.com/datasets/tmdb/tmdb-movie-metadata

Dataset files are ;
tmdb_5000_credits.csv
tmdb_5000_movies.csv
-> Steps to run the Program;

Install all the required (mentioned above) libraries) by the command "pip install (library/package Name)" on your terminal or cmd.
Run the 'movie_recommendation.ipynb' file on your jupyter notebook , vscode or google colab etc. platforms.
It will generate 2 pickel files (movie_list.pkl, similarities.pkl) which will store our processed data.
Use pickel file data to call in Movies_web.py file and run it on streamlit.
Use command "streamlit run (Movie_web.py location)" on your terminal.
Enter movie name from about 4800 movies and get recommendations related to that movie and ENJOY 😊.
