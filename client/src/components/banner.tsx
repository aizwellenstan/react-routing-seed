import * as React from 'react';
import { styled } from 'client/src/styles';
import { useTranslation } from 'react-i18next';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
// import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { bannerHeight } from 'client/src/styles/constants';
// import logoLarge from 'client/assets/logo-large.png';
// import logoSmall from 'client/assets/logo-small.png';
import { Link, Redirect } from 'react-router-dom';

const Wrapper = styled.header`
  display: flex;
  position: relative;
  z-index: 999;
  box-sizing: border-box;
  flex: 0 0 auto;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: ${bannerHeight};
  padding: 8px 18px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
`;

const LogoSmall = styled.img`
  display: block;
  height: 34px;
  margin: auto;
`;

const LogoLarge = styled.img`
  display: block;
  height: 34px;
  margin: 4px 0;
`;

const Title = styled.h1`
  display: none;
`;

const Hgroup = styled.div`
  flex: 1 1 auto;

  ${LogoLarge} {
    display: none;
  }

  @media screen and (min-width: 700px) {
    ${LogoLarge} {
      display: block;
    }

    ${LogoSmall} {
      display: none;
    }
  }
`;

const Toolbox = styled.div`
  display: none;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 18px;
  }

  @media screen and (min-width: 700px) {
    display: flex;
  }
`;

// const Icon = styled(FontAwesomeIcon)`
//   margin: auto;
//   color: ${({ theme }) => theme.highlightNormal};
//   font-size: 24px;
// `;

const OriginalLink = styled.a`
  display: block;
  padding: 8px 14px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.highlightNormal};
  color: ${({ theme }) => theme.foregroundReverse};
  font-size: 12px;
  font-weight: bold;

  &:hover {
    text-decoration: none;
  }

  svg {
    margin-right: 0.5em;
  }
`;

const handleLogout = () => {
  localStorage.removeItem('login');
  return <Redirect to="/login" />
};

export const Banner = React.memo(() => {
  const { t } = useTranslation();
  if (localStorage.getItem('login') == 'true') {
    return (
      <Wrapper>
        <Hgroup>
          <Link to="/">
            <Title>OCMS</Title>
            {/* <LogoLarge src={logoLarge} alt="itsukara" /> */}
            {/* <LogoLarge src={logoSmall} alt="itsukara" />
            <LogoSmall src={logoSmall} alt="itsukara" /> */}
          </Link>
        </Hgroup>

        <Toolbox>
          {/* <a
            href="#"
            target="__blank"
            rel="noreferrer"
            title={t('banner.view_twitter', {
              defaultValue: 'View Twitter',
            })}
            aria-label={t('banner.view_twitter', {
              defaultValue: 'View Twitter',
            })}
          >
            <Icon icon={faTwitter} />
          </a>

          <a
            href="https://github.com/aizwellenstan/itsukara-pureweb"
            target="__blank"
            rel="noreferrer"
            title={t('banner.view_source', { defaultValue: 'View Source' })}
            aria-label={t('banner.view_source', { defaultValue: 'View Source' })}
          >
            <Icon icon={faGithub} />
          </a> */}

          <OriginalLink
            // href="#"
            target="__blank"
            rel="noreferrer"
          >
            {/* <FontAwesomeIcon icon={faExternalLinkSquareAlt} /> */}
            {/* {t('banner.open_original', { defaultValue: 'Open Original' })} */}
            <Link
              to="/"
              onClick={() => {
                handleLogout();
              }}
              style={{ textDecoration: 'none' }}
            >
              <span style={{ color: 'white' }}>
                {t(`banner.logout`, {
                  defaultValue: 'ログアウト',
                })}
              </span>
            </Link>
          </OriginalLink>
        </Toolbox>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <Hgroup>
        <Link to="/">
          <Title>OCMS</Title>
          {/* <LogoLarge src={logoLarge} alt="itsukara" /> */}
          {/* <LogoLarge src={logoSmall} alt="itsukara" />
            <LogoSmall src={logoSmall} alt="itsukara" /> */}
        </Link>
      </Hgroup>

      <Toolbox>
        {/* <a
            href="#"
            target="__blank"
            rel="noreferrer"
            title={t('banner.view_twitter', {
              defaultValue: 'View Twitter',
            })}
            aria-label={t('banner.view_twitter', {
              defaultValue: 'View Twitter',
            })}
          >
            <Icon icon={faTwitter} />
          </a>

          <a
            href="https://github.com/aizwellenstan/itsukara-pureweb"
            target="__blank"
            rel="noreferrer"
            title={t('banner.view_source', { defaultValue: 'View Source' })}
            aria-label={t('banner.view_source', { defaultValue: 'View Source' })}
          >
            <Icon icon={faGithub} />
          </a> */}

        <OriginalLink
          // href="#"
          target="__blank"
          rel="noreferrer"
        >
          {/* <FontAwesomeIcon icon={faExternalLinkSquareAlt} /> */}
          <Link
            to="/login"
            style={{ textDecoration: 'none' }}
          >
            <span style={{ color: 'white' }}>
              {t(`banner.login`, {
                defaultValue: 'Login',
              })}
            </span>
          </Link>
        </OriginalLink>
      </Toolbox>
    </Wrapper>
  );
});
