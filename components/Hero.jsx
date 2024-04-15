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
            Customer Data Product (CDP) at Deere is a powerful data integration solution that enables a unified view of customer data for digital products and analytics capabilities. By bringing together various source data products, CDP builds a digital thread of customer data that integrates all customer activities, behavioral insights, and predictive analytics, providing a comprehensive and up-to-date view of a customer's activity. CDP is designed to be a consumer-aligned data source, available to anyone who needs quick and easy access to customer data to improve customer engagement and experience.
          </p>
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
