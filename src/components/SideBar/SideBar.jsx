import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
} from '@mui/material';

import { useTheme } from '@mui/system';
import { LinkImage, Image, StyledLink } from './styles';
import { useGetMovieGenresQuery } from '../../services/the_movie_database_api';

import LoadingIcon from '../LoadingIcon/LoadingIcon';
import movieGenreIcons from '../../assets/images/movie_genres';

const SideBar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const { data, isFetching } = useGetMovieGenresQuery();

  const darkLogo = '';
  const lightLogo = '';

  const movieCategories = [
    { label: 'Popular', value: 'popular' },
    { label: 'Just Added', value: 'just_added' },
    { label: 'Coming Soon', value: 'coming_soon' },
  ];

  return (
    <>
      <LinkImage to="/" />
      <Image src={theme.palette.mode === 'dark' ? darkLogo : lightLogo} />
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {movieCategories.map(({ label, value }) => (
          <StyledLink key={value} to="/">
            <ListItem onClick={() => {}} button>
              <ListItemText primary={label} />
            </ListItem>
          </StyledLink>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <LoadingIcon />
        ) : (
          data.genres.map(({ name, id }) => (
            <StyledLink key={name} to="/">
              <ListItem onClick={() => {}} button>
                <ListItemIcon>
                  <img
                    src={movieGenreIcons[name.toLowerCase()]}
                    height="35px"
                    width="35px"
                  />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </StyledLink>
          ))
        )}
      </List>
    </>
  );
};

export default SideBar;
