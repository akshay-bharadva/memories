import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { ThumbUpAltOutlined } from '@material-ui/icons';

function Likes({ post }) {
  const user = JSON.parse(localStorage.getItem('profile'));
  if (post.likes.length > 0) {
    return post.likes.find(
      (like) => like === (user?.result?.googleId || user?.result?._id),
    ) ? (
      <>
        <ThumbUpAltIcon fontSize="small" />
        &nbsp;
        {post.likes.length > 2
          ? `You and ${post.likes.length - 1} others`
          : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}
      </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
        &nbsp;
          {post.likes.length}
          {' '}
          {post.likes.length === 1 ? 'Like' : 'Likes'}
        </>
      );
  }

  return (
    <>
      <ThumbUpAltOutlined fontSize="small" />
      &nbsp;Like
    </>
  );
}

export default Likes;
