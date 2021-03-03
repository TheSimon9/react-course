function LikeButton() {

  const [liked, setLiked] = React.useState(false);

  if(!liked){
    return React.createElement(
      'button',
      { onClick: () => setLiked(true) },
      'Like'
    );
  }

  return "You liked this page"
}

const domContainer = document.querySelector('#react-container');
ReactDOM.render(React.createElement(LikeButton), domContainer);