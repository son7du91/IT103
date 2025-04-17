let bookmarks = json.parse(localstorage.getitem('bookmarks')) || [];
function render_bookmarks() {
    let list = document.getElementById('bookmark-list');
    list.innerHTML = '';

    bookmarks.forEach((bookmark, index) => {
        list.innerHTML += `
            <div class="bookmark">
                <a href="${bookmark.url}" target="_blank">${bookmark.name}</a>
                <button onclick="delete_bookmark(${index})">x</button>
            </div>
        `;
    });
}
function add_bookmark() {
    let name = document.getElementById('site-name').value.trim();
    let url = document.getElementById('site-url').value.trim();
    if (!name || !url) {
        alert('vui lòng nhập đầy đủ thông tin!');
        return;
    }
    bookmarks.push({ name, url });
    localstorage.setitem('bookmarks', json.stringify(bookmarks));
    document.getElementById('site-name').value = '';
    document.getElementById('site-url').value = '';
    render_bookmarks();
}
function delete_bookmark(index) {
    bookmarks.splice(index, 1);
    localstorage.setitem('bookmarks', json.stringify(bookmarks));
    render_bookmarks();
}
window.onload = render_bookmarks;
