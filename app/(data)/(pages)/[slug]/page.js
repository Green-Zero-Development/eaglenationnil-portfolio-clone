import { apiUrl } from '../../../global-settings.js';
import { notFound } from 'next/navigation';
import ThankYou from "../../../templates/ThankYou.js";
import EventListing from "../../../templates/EventListing.js";
import About from "../../../templates/About.js";
import FaqsPage from "../../../templates/FaqsPage.js";
import StudentTestimonials from "../../../templates/StudentTestimonials.js";
import Contact from "../../../templates/Contact.js";
import OneTimeDonation from "../../../templates/OneTimeDonation.js";
import Memberships from "../../../templates/Memberships.js";
import DonationSingle from "../../../templates/DonationSingle.js";

async function getAllPages() {
  const res = await fetch(apiUrl + `/pages/all`, {
    next: { revalidate: 60 }
  });
  if (!res.ok) {
    throw Error(res.statusText);
  } else {
    return res.json();
  }
}

async function getSinglePage(slug) {
  const res = await fetch(apiUrl + `/pages/all/${slug}`, {
    next: { revalidate: 60 }
  });
  if (slug == "home" || slug == "404-2" || res == "404") {
    return notFound();
  } else {
    return res.json();
  }
}

async function getLeaders() {
  const res = await fetch(apiUrl + `/leaders/all`, {
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

async function getEvents() {
  const res = await fetch(apiUrl + `/events/all`, {
    next: { revalidate: 60 }
  });
  if (!res.ok) {
    throw Error(res.statusText);
  } else {
    return res.json();
  }
}

export default async function Page({ params: { slug } }) {
  const _page = getSinglePage(slug);
  const page = await _page;

  if (page.response === "404") return notFound();
  
  const lightOrDarkMode = page.acf.light_or_dark_mode;

  const _leaders = getLeaders();
  const leaders = await _leaders;

  const _testimonials = getTestimonials();
  const testimonials = await _testimonials;

  const _events = getEvents();
  const events = await _events;

  if (page.template == "templates/thank-you.php") {
    return (
      <>
        <ThankYou pageData={page} />
      </>
    );
  } else if (page.template == "templates/event-listing.php") {
    return (
      <>
        <EventListing pageData={page} events={events} />
      </>
    );
  } else if (page.template == "templates/about.php") {
    return (
      <>
        <About pageData={page} leaders={leaders} />
      </>
    );
  } else if (page.template == "templates/faq-page.php") {
    return (
      <>
        <FaqsPage pageData={page} />
      </>
    );
  } else if (page.template == "templates/student-testimonials.php") {
    return (
      <>
        <StudentTestimonials pageData={page} testimonials={testimonials} />
      </>
    );
  } else if (page.template == "templates/contact.php") {
    return (
      <>
        <Contact pageData={page} />
      </>
    );
  } else if (page.template == "templates/one-time-donation.php") {
    return (
      <>
        <OneTimeDonation pageData={page} testimonials={testimonials} />
      </>
    );
  } else if (page.template == "templates/membership.php") {
    return (
      <>
        <Memberships pageData={page} testimonials={testimonials} />
      </>
    );
  } else if (page.template == "templates/donation-single.php") {
    return (
      <>
        <DonationSingle pageData={page} testimonials={testimonials} />
      </>
    );
  } else {
    return (null);
  }
}

export async function generateStaticParams() {
  const _pages = getAllPages();
  const pages = await _pages;
  return pages.map((pageSing) => ({ 
      slug: pageSing.slug 
    }));
}