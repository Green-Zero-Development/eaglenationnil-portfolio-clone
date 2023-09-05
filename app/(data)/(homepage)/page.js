import { apiUrl } from '../../global-settings.js';
import Home from '../../templates/Home';

async function getPage() {
  const res = await fetch(apiUrl + `/pages/all/home`, {
    next: { revalidate: 60 }
  });
  if (!res.ok) {
    throw Error(res.statusText);
  } else {
    return res.json();
  }
}

async function getTestimonials() {
  const res = await fetch(apiUrl + `/testimonials/all`, {
    next: { revalidate: 60 }
  });
  if (!res.ok) {
    throw Error(res.statusText);
  } else {
    return res.json();
  }
}

export default async function Page() {
  const _page = getPage();
  const page = await _page;
  const lightOrDarkMode = page.acf.light_or_dark_mode;

  const _testimonials = getTestimonials();
  const testimonials = await _testimonials;
  
  return (
    <>
      <Home pageData={page} testimonials={testimonials} />
    </>
  );
}