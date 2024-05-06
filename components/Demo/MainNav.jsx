import { useContext } from 'react';

import { Button } from "components/ui/";

import { DisplayContext } from 'components/context';
import { ThemeSelector } from 'components';
import { UserMenu } from './index';


export const MainNav = (props) => {
  const { setTheme } = props;
  const { setDisplay } = useContext(DisplayContext);

  const handleFullSized = (event) => {
    if (setDisplay){
      setDisplay('fullsized');
    }
  }

  const handleMinimized = (event) => {
    if (setDisplay){
      setDisplay('minimized');
    }
  }

  return (
    <div className="border-b dark:border-stone-600 bg-green-700 dark:bg-stone-900 shadow-xl px-3">
      <div className="h-18 px-4 mb-2">
        <div className="flex items-center justify-between space-x-4 pt-3">
          <ThemeSelector setTheme={setTheme} />
          <UserMenu />
        </div>
      </div>
    </div>
  )
}
