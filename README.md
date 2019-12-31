# Django ES6 test app.

This app uses django-compressor to transpile ES6 scripts to ES5.

The reason that we are using it this way is because we want to preserve
existing functionality that is written in old JS.
Another reason being is that we don't want to have front end and
backend separation. We want to keep uising django templates where it makes sense
and use Vue for parts that require interactivity.

It uses webpack in the background and spits out bundled file.

This particlular example uses Vue for the front end and Less.js.


## To get started

You need to have NPM and Python3 installed.
Additionally for python you would want `virtualenv` so that you can sandbox this
application

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

## How it works

In the main project settings we have dfined `COMPRESS_PRECOMPILERS` where we
have mimetype and precompiler class.
So any js file with mimetype `module` will be transpiled to plain js.

In our example:
```html
{% compress js %}
  <script type="module" src='{% static "my_test/main.js" %}'></script>
{% endcompress %}
```

In the background it uses webpack to transpile these files.
Another thing to note is that it is possible to use Less styling in `*.vue` files.

There is no particlular reason Less is being used and it can be replaced with whatever
works for you best.