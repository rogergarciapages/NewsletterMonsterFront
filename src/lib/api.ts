export async function fetchPosts() {
    const res = await fetch('/api/posts');
    const data = await res.json();
  
    if (!res.ok) {
      throw new Error(data.error || 'Failed to fetch posts');
    }
  
    return data;
  }
  
  export async function fetchPost(id: string) {
    const res = await fetch(`/api/posts/${id}`);
    const data = await res.json();
  
    if (!res.ok) {
      throw new Error(data.error || 'Failed to fetch post');
    }
  
    return data;
  }
  