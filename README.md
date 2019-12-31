# Django ES6 test app.


This app uses django-compressor to transpile ES6 scripts to ES5.

The reason that we are using it this way is because we want to preserve
existing functionality that is written in old JS.
Another reason being is that we don't want to have front end application and
backend in Django. We want to keep uising django templates where it makes sense
and use Vue for parts that require interactivity.

It uses webpack in the background and spits out bundled file.

This particlular example uses Vue for the front end and Less.js.


## To get started

Clone this repository and run following commands:
```
pip install -r requirements.txt
python manage.py migrate
npm install
python manage.py runserver
```

This will install python requirements, apply DB migrations and install node
dependencies.
Finally it will fire up django dev server on default port: `http://127.0.0.1:8000/`