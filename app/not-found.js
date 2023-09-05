import { apiUrl } from './global-settings.js';
import OnLoadScripts from "./components/OnLoadScripts.js";

function getButtonLink(linkToWhere, onSiteLink, offSiteLink, fileLink) {
    switch (linkToWhere) {
      case "A page on this site":
        return (onSiteLink);
      case "Another site":
        return (offSiteLink);
      case "A file":
        return (fileLink);
      default:
        return ('/');
    }
}

export default async function NotFound() {

    async function getPage() {
        const res = await fetch(apiUrl + `/pages/all/404-2`)
        if (!res.ok) {
            throw Error(res.statusText);
        } else {
            return res.json();
        }
    }

    const _page = getPage();
    const pageData = await _page;

    const lightOrDarkMode = pageData.acf.light_or_dark_mode;
   
    return (
      <>
      <div dangerouslySetInnerHTML={{__html: pageData.yoast_head[0]}}>

      </div>
        <div className="four-o-four-page">
          <div className="four-o-four-wrapper">
              <img className="mini-badge" src="https://inside.eaglenationnil.com/wp-content/uploads/2023/04/mobile-logo.svg" />
              <h1 className="four-o-four-heading">{pageData.acf.hero_section.title}</h1>
              <div className="four-o-four-p" dangerouslySetInnerHTML={{__html: pageData.acf.hero_section.description}}></div>
          </div>
        </div>
        <OnLoadScripts pageData={pageData} lightOrDarkMode={lightOrDarkMode} />
      </>
    );
}