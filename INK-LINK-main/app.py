from flask import Flask, render_template, request, redirect, url_for, flash, session

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Needed for flash messages

# Predefined users
users = {
    'subhrajyotigoswami563@gmail.com': {
        'password': '1234567890',
        'role': 'student'
    },
    'goswamisubhrajyoti563@gmail.com': {
        'password': '0987654321',
        'role': 'teacher'
    }
}

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/student')
def student():
    return render_template('student.html')

@app.route('/teacher')
def teacher():
    return render_template('teacher.html')

@app.route('/signup', methods=['POST'])
def signup():
    email = request.form['email']
    password = request.form['password']
    role = request.form['role']
    
    if email in users:
        flash('User already exists. Please log in.')
        return redirect(url_for('home'))
    
    users[email] = {'password': password, 'role': role}
    flash('Signup successful. Welcome!')
    return redirect(url_for('new_student'))


@app.route('/login', methods=['POST'])
def login():
    email = request.form['email']
    password = request.form['password']
    
    user = users.get(email)
    if user and user['password'] == password:
        session['user'] = email
        if user['role'] == 'student':
            return redirect(url_for('student'))
        elif user['role'] == 'teacher':
            return redirect(url_for('teacher'))
    
    flash('Invalid credentials. Please try again.')
    return redirect(url_for('home'))

@app.route('/new_student')
def new_student():
    return render_template('new_student.html')


@app.route('/logout')
def logout():
    session.pop('user', None)
    flash('You have been logged out.')
    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True)
