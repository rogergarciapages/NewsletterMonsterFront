import { supabase } from './supabaseClient';

export const recordLike = async (userId: string, postId: string) => {
  const { data, error } = await supabase
    .from('likes') // Ensure this table exists in your Supabase database
    .insert([{ user_id: userId, post_id: postId }]);

  if (error) {
    console.error('Error recording like:', error);
    throw error;
  }

  return data;
};
