import { Menu } from "@components";
const data = {
  title: "designplox",
  items: [
    {
      previous: "start",
      id: "albums",
      title: "albums",
      nextItems: [
        {
          previous: "albums",
          id: "album-wings",
          title: "get your wings",
          nextItems: [
            {
              previous: "album-wings",
              id: "song-wings-1",
              title: "lorem ipsum - wings 1",
            },
            {
              previous: "album-wings",
              id: "song-wings-2",
              title: "lorem ipsum - wings 2",
            },
            {
              previous: "album-wings",
              id: "song-wings-3",
              title: "lorem ipsum - wings 3",
            },
          ],
        },
        {
          previous: "albums",
          id: "album-hotel-california",
          title: "hotel california",
          nextItems: [
            {
              previous: "album-hotel-california",
              id: "song-california-1",
              title: "lorem ipsum - california 1",
            },
            {
              previous: "album-hotel-california",
              id: "song-california-2",
              title: "lorem ipsum - california 2",
            },
            {
              previous: "album-hotel-california",
              id: "song-california-3",
              title: "lorem ipsum - california 3",
            },
          ],
        },
        {
          previous: "albums",
          id: "album-physical-graffiti",
          title: "physical graffiti",
          nextItems: [
            {
              previous: "album-physical-graffiti",
              id: "song-graffiti-1",
              title: "lorem ipsum - graffiti 1",
            },
            {
              previous: "album-physical-graffiti",
              id: "song-graffiti-2",
              title: "lorem ipsum - graffiti 2",
            },
            {
              previous: "album-physical-graffiti",
              id: "song-graffiti-3",
              title: "lorem ipsum - graffiti 3",
            },
          ],
        },
      ],
    },
    {
      id: "artists",
      title: "artists",
      items: [
        {
          id: "artist-dali",
          title: "Dali",
          nextItems: [],
        },
      ],
    },
  ],
};
export default function App() {
  return <Menu data={data} />;
}
