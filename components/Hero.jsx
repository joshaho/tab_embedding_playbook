import { useContext } from 'react';
import { cn } from 'utils';

import { DisplayContextProvider, DisplayContext } from 'components/context';
import { Analytics } from 'components';

export const Hero = (props) => {
  const { children } = props;

  return (
    <DisplayContextProvider>
      <Md props={props} snippet={children} />
      <Lg props={props} snippet={children} />
    </DisplayContextProvider>
  );
}

const Md = (props) => {
  const { snippet, src, width, height, hideTabs, device } = props;
  const { display } = useContext(DisplayContext);

  return (
    <div className='lg:hidden space-y-6'>
      <div className='my-12'>
        <div className={cn(display === 'minimized' ? '' : 'hidden')}>
          <Intro />
        </div>
        <div className='my-12'>
          <Analytics
            src={src}
            width={width}
            height={height}
            hideTabs={hideTabs}
            device={device}
            toolbar={"hidden"}
          />
        </div>
        <div className={cn(display === 'minimized' ? '' : 'hidden')}>
          <EmbedCode
            snippet={snippet}
          />
        </div>
      </div>
    </div>
  )
}

const Lg = (props) => {
  const { snippet, src, width, height, hideTabs, device } = props;
  const { display } = useContext(DisplayContext);

  return (
    <div className='hidden lg:grid mt-9 grid-cols-1 md:grid-cols-12 md:gap-9'>
      <div className={cn(display === 'minimized' ? 'col-span-4' : 'hidden')}>
        <Intro />
        <EmbedCode snippet={snippet} />
      </div>
      <div className={cn(display === 'minimized' ? 'col-span-8' : 'col-span-12')}>
        <Analytics
          src={src}
          width={width}
          height={height}
          hideTabs={hideTabs}
          device={device}
          toolbar={"hidden"}
        />
      </div>
    </div>
  )
}

const Intro = () => {
  return (
    <div>
      <h1 className='text-5xl font-bold mb-9'>Customer Data Product</h1>
        <div className='leading-loose space-y-6'>
          <p></p>
          <p>
            Supply Chain Data Product (SCDP) at Deere is a robust data integration solution that allows for a consolidated view of supply chain data for improved operational efficiency and decision-making. By consolidating data from various sources, SCDP creates a seamless flow of information regarding inventory levels, production schedules, supplier performance, and logistics operations. This unified view enables better forecasting, optimization of resources, and identification of potential bottlenecks in the supply chain process. SCDP is designed to be a reliable source of data for all stakeholders involved in the supply chain management process, providing real-time insights to drive continuous improvement and agility within the supply chain network.          </p>
        </div>
    </div>
  )
}

const EmbedCode = (props) => {
  const { snippet } = props;
  return (
    <div className='my-9'>
      { snippet }
    </div>
  )
}
