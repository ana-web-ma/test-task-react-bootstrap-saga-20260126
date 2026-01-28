import { useAppDispatch, useAppSelector } from '@utils/hooks';
import { useEffect } from 'react';
import { CommentType, fetchCommentsRequest } from './commentsSlice';
import { Stack } from 'react-bootstrap';
import Comment from './Comment';
import CommentSkeleton from './CommentSkeleton';

interface Props {
  postId: number;
}

export default function Comments(props: Props) {
  const { postId } = props;
  const postComments = useAppSelector((state) => state.comments.commentsByPostId[postId]);

  const comments = postComments?.comments || [];
  const loading = postComments?.loading || false;
  const error = postComments?.error || null;

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!comments.length && !loading) {
      dispatch(fetchCommentsRequest(postId));
    }
  }, [postId, dispatch, comments.length, loading]);

  return (
    <Stack gap={3}>
      {error && 'Error'}
      {comments.length <= 0 && !loading && 'No comments yet'}
      {loading ? <CommentSkeleton /> : comments.map((e: CommentType) => <Comment key={e.id} comment={e} />)}
    </Stack>
  );
}
