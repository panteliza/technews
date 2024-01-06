interface PostProps {
  id: string;
  author: string;
  date: string;
  thumbnail?: string;
  authorEmail?: string;
  title: string;
  content: string;
  links?: string[];
  category?: string;
}
export default async function Post({
  id,
  author,
  date,
  thumbnail,
  authorEmail,
  title,
  content,
  links,
  category,
}: PostProps){
return (
  <div>
  <div>
    Posted by: <span>{author}</span>
  </div>
  </div>
)}