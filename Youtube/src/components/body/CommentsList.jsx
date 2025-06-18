import { useEffect, useState } from "react";
import { YOUTUBE_COMMENTS_API } from "../../utils/constants";
import ExpandableText from "./ExpandableText";

const CommentsList = ({ videoId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(
          YOUTUBE_COMMENTS_API + videoId + "&part=snippet&maxResults=100"
        );
        const data = await res.json();
        setComments(data.items); // each item is a commentThread
      } catch (err) {
        console.error("Error fetching comments:", err);
      }
    };

    if (videoId) fetchComments();
  },[videoId]);

  return (
    <div className="w-[70vw] p-4">
      <h3 className="text-lg font-semibold mb-4">{comments?.length} Comments</h3>

      {comments?.length === 0 ? (
        <p className="text-gray-500">No comments available.</p>
      ) : (
        comments?.map((comment) => {
          const snippet = comment?.snippet?.topLevelComment?.snippet;
          const name = snippet?.authorDisplayName?.slice(1);

          return (
            <div key={comment.id} className="flex gap-3 mb-4">
              <img
                src={snippet?.authorProfileImageUrl}
                onError={(e) =>
                  (e.target.src =
                    "https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg=")
                }
                alt="author"
                className="w-10 h-10 rounded-full"
              />

              <div>
                <p className="font-medium">{name}</p>
                <ExpandableText htmlText={snippet?.textDisplay} />
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default CommentsList;

