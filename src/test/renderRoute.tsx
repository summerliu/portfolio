import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import Layout from '../components/Layout';
import About from '../pages/About';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

/** Render the real route tree at a given path. */
export function renderRoute(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </MemoryRouter>,
  );
}
