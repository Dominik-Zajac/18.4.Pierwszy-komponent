var movies = [
    {
        id: 1,
        image: './image/wladca.jpeg',
        title: 'Wladca pierscieni',
        type: 'Fantasy/Akcji',
        desc: 'Film o wojnie o pierscien'
    },
    {
        id: 2,
        image: './image/hobbit.jpg',
        title: 'Hobbit',
        type: 'Fantasy/Przygodowy',
        desc: 'Film o wedrowce hobbita'
    },
    {
        id: 3,
        image: './image/nietykalni.jpeg',
        title: 'Nietykalni',
        type: 'Dramat/Komediodramat',
        desc: 'Historia przyjazni dwoch mezczyzn'
    }
];

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired
    },

    render() {
        return (
            React.createElement('li', {
                    key: this.props.movie.id
                },
                React.createElement(MovieImage, {
                    image: this.props.movie.image
                }),
                React.createElement(MovieTitle, {
                    title: this.props.movie.title
                }),
                React.createElement(MovieType, {
                    type: this.props.movie.type
                }),
                React.createElement(MovieDescription, {
                    desc: this.props.movie.desc
                })
            )
        )

    },
});

var MovieImage = React.createClass({
    propTypes: {
        image: React.PropTypes.string.isRequired
    },

    render() {
        return React.createElement('img', {
            src: this.props.image
        })
    },
});

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },

    render() {
        return React.createElement('h2', {}, this.props.title)
    },
});

var MovieType = React.createClass({
    propTypes: {
        type: React.PropTypes.string.isRequired
    },

    render() {
        return React.createElement('p', {}, this.props.type)
    },
});

var MovieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired
    },

    render() {
        return React.createElement('p', {}, this.props.desc)
    },
});

var moviesElements = movies.map(function(movie) {
    return React.createElement(Movie, {
        movie: movie,
        key: movie.id
    })
});

var MoviesList = React.createClass({

    render() {
        return React.createElement('ul', {}, moviesElements)
    },
});

var element = React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmow'),
    React.createElement(MoviesList, {})
);

ReactDOM.render(element, document.getElementById('app'));