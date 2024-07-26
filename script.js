document.addEventListener('DOMContentLoaded', () => {
    const introText = "Welcome to Shaurya's World!";
    let index = 0;
    const speed = 100;

    function typeWriter() {
        if (index < introText.length) {
            document.getElementById("welcome-text").innerHTML += introText.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        } else {
            document.getElementById("welcome-text").classList.add("typing-animation");
        }
    }

    typeWriter();

    fetch('posts.json')
        .then(response => response.json())
        .then(data => {
            const postsDiv = document.getElementById('posts');
            data.posts.forEach((post, index) => {
                const postElement = document.createElement('div');
                postElement.classList.add('col-md-6', 'mb-4');
                postElement.innerHTML = `
                    <div class="card" data-index="${index}">
                        <div class="card-body">
                            <h3 class="card-title">${post.title}</h3>
                            <p class="card-text">${post.excerpt}</p>
                            <p class="blog-date">${post.date}</p>
                        </div>
                    </div>
                `;
                postElement.addEventListener('click', () => {
                    window.location.href = `post.html?id=${index}`;
                });
                postsDiv.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error fetching the blog posts:', error));

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
