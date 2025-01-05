import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

interface Comment {
  id: string;
  author: string;
  text: string;
  postId: string; 
}

interface CommentSectionProps {
  postId: string;
}

export default function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  const handleAddComment = () => {
    if (newComment.trim() && authorName.trim()) {
      const newCommentObj: Comment = {
        id: new Date().toISOString(),
        author: authorName,
        text: newComment,
        postId, // Save the postId with each comment
      };
      setComments([...comments, newCommentObj]);
      setNewComment('');
      setAuthorName('');
    }
  };

  const handleEditComment = (commentID: string) => {
    const CommentToEdit = comments.find((comment) => comment.id === commentID);
    if (CommentToEdit) {
      setNewComment(CommentToEdit.text);
      setAuthorName(CommentToEdit.author);
      setEditingCommentId(commentID);
    }
  };

  const handleSaveEditedComment = () => {
    if (newComment.trim() && authorName.trim() && editingCommentId) {
      const updatedComments = comments.map((comment) =>
        comment.id === editingCommentId
          ? { ...comment, text: newComment, author: authorName } // Fix typo here
          : comment
      );
      setComments(updatedComments);
      setNewComment('');
      setAuthorName('');
      setEditingCommentId(null);
    }
  };

  return (
    <div className="mt-8 ">
      <h2 className="text-2xl font-semibold">Comments</h2>
      <div className="mt-4 space-y-4">
        {comments.length > 0 ? (
          comments
            .filter((comment) => comment.postId === postId) // Only show comments for the current post
            .map((comment) => (
              <Card key={comment.id}>
                <CardContent className="p-4">
                  <div className="font-semibold">{comment.author}</div>
                  <p>{comment.text}</p>
                  <button
                    onClick={() => handleEditComment(comment.id)}
                    className="mt-2 text-blue-800"
                  >
                    Edit
                  </button>
                </CardContent>
              </Card>
            ))
        ) : (
          <p className="text-black">No comments yet</p>
        )}
      </div>

      <div className="mt-6">
        <Input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Your name"
          className="w-full mb-2 text-gray-900"
        />
      </div>

      <Input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment"
        className="w-full mb-2 text-gray-900"
      />
      <Button
        onClick={editingCommentId ? handleSaveEditedComment : handleAddComment}
        className="mt-4 bg-blue-800"
      >
        {editingCommentId ? "Save" : "Submit"}
      </Button>
    </div>
  );
}
