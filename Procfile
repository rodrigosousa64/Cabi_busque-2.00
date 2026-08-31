release: cd backend && python manage.py migrate
web: cd backend && gunicorn core.wsgi:application --bind 0.0.0.0:$PORT --pythonpath .
