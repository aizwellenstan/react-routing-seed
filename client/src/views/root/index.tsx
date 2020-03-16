import * as React from 'react';
import { ThemeProvider, styled } from 'client/src/styles';
import { I18nextProvider } from 'react-i18next';
import { getLocale } from 'client/src/locales';
import { Switch, Route } from 'react-router-dom';
import { theme } from 'client/src/styles/theme';
import { Banner } from 'client/src/components/banner';
import { GlobalStyle } from './global-style';

// import { Events } from 'client/src/views/events';
import { Home } from 'client/src/views/home';
import { Login } from 'client/src/views/login';

const locale = getLocale();

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.backgroundNormal};
`;

export const Root: React.SFC = React.memo(() => {
  return (
    <>
      <I18nextProvider i18n={locale}>
        <ThemeProvider theme={theme}>
          <Wrapper>
            <Banner />
            <Switch>
              <Route exact path="https://nadidemoasset.nadi3docms.com/static/" component={Home} />
              <Route path="https://nadidemoasset.nadi3docms.com/static/login" component={Login} />
            </Switch>
            <GlobalStyle />
          </Wrapper>
        </ThemeProvider>
      </I18nextProvider>
    </>
  );
});
