document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    fetch('posts.json')
        .then(response => response.json())
        .then(data => {
            const post = data.posts[postId];
            if (post) {
                document.getElementById('post-content').innerHTML = `
                    <h1>${post.title}</h1>
                    <p>${post.content}</p>
                `;
            } else {
                document.getElementById('post-content').innerHTML = `
                    <h1>post not found brev</h1>
                    <p>DNE</p>
                `;
            }
        });
});
