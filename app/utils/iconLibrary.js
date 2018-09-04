import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone
} from "@fortawesome/pro-solid-svg-icons";
import {
  faChrome,
  faGithub,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import {
} from "@fortawesome/pro-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

export default function() {
  library.add(
    faChrome,
    faEnvelope,
    faGithub,
    faLinkedin,
    faMapMarkerAlt,
    faPhone,
    faTwitter
  );
}
