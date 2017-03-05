var PhotoLister;

PhotoLister = {
    photoToListItem: function (photo) {
        return [
            '<li><figure><img src="',
            photo.url, '" alt=""/>',
            '<figcaption>',
            photo.title,
            '</figcaption></figure></li>'
        ].join('');
    },

    photoListToHTML: function (photos) {
        return ['<ul>', photos.map(PhotoLister.photoToListItem).join(''), '</ul>'].join('');
    }
};

module.exports = PhotoLister;