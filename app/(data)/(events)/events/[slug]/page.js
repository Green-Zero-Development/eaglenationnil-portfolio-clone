import { apiUrl } from '../../../../global-settings.js';
import { notFound } from 'next/navigation';
import OnLoadScripts from "../../../../components/OnLoadScripts.js";
import EventSingle from "../../../../templates/EventSingle.js";

async function getAllPosts() {
  const res = await fetch(apiUrl + `/events/all`)
  if (!res.ok) {
    throw Error(res.statusText);
  } else {
    return res.json();
  }
}

async function getSinglePost(slug) {
  const res = await fetch(apiUrl + `/events/all/${slug}`);
  if (!res.ok) {
    return notFound();
  } else {
    return res.json();
  }
}

export default async function Page({ params: { slug } }) {
  const _post = getSinglePost(slug);
  const post = await _post;
  
  if (!slug) return notFound();

  return (
    <>
      <EventSingle postData={post} />
      <OnLoadScripts postData={post} />
    </>
  );
}

export async function generateStaticParams() {
  const _posts = getAllPosts();
  const posts = await _posts;
  return posts.map((postSing) => ({ 
      slug: postSing.slug 
    }));
}