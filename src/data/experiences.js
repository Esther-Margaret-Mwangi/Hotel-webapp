import horseImage from "../assets/images/horse.jpg";
import bikingImage from "../assets/images/biking.jpg";
import walkingImage from "../assets/images/walking.jpg";
import naturewalkImage from "../assets/images/ecosafari.jpg";
import bongoImage from "../assets/images/bongo.jpg";
import breakfastImage from "../assets/images/breakfast.jpg";

const experiences = [
  {
    id: "horseback-safari",
    title: "Horseback Safari",

    description:
      "Saddle up for a guided safari on horseback through the Mount Kenya Wildlife Conservancy. With every gentle stride, get closer to golden zebras, giraffes, and antelopes while soaking in panoramic views and the peace of nature’s rhythm.",
    hero: horseImage,
  },
  {
    id: "biking-safari",
    title: "Biking Safari",
    description:
      "Experience the thrill of a biking safari at 7,000 feet above sea level. Whether manual or pedal-assisted ebikes, your guided ride weaves through savannah trails, offering breathtaking encounters with Mount Kenya’s diverse animal residents.",
    hero: bikingImage,
  },
  {
    id: "conservancy-walking-safari",
    title: "Conservancy Walking Safari",
    description:
      "Join our naturalist on a 2.5-hour walking journey through open savannah, accompanied by rangers. It’s a chance to connect with nature—on foot—with sightings of impalas, golden zebras, and giraffes enhancing the experience.",
    hero: walkingImage,
  },
  {
    id: "mount-kenya-forest-nature-walk",
    title: "Mount Kenya Forest Nature Walk",
    description:
      "Delve into ancient indigenous woodland on this guided uphill walk through the Mount Kenya Forest. Discover native plants, birdlife, and the serene beauty of a landscape where elephants still roam and nature thrives.",
    hero: naturewalkImage,
  },
  {
    id: "bongo-tracking",
    title: "Bongo Tracking",
    description:
      "Join expert trackers on a dawn expedition in search of the critically endangered Mountain Bongo. Guided by hoofprints and forest clues, this rare adventure offers a glimpse into one of Africa’s most elusive species in its natural habitat.",
    hero: bongoImage,
  },
  {
    id: "breakfast-with-bongo",
    title: "Breakfast with the Endangered Mountain Bongos",
    description:
      "This immersive breakfast experience places you within the Mount Kenya Wildlife Conservancy, where you’ll enjoy a chef-curated live cooking breakfast just steps away from the rare and endangered Mountain Bongo, a peaceful encounter with conservation at heart.",
    hero: breakfastImage,
  },
];

export default experiences;
