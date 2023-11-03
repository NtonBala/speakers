import { useContext } from 'react';

// * The only case when we should see an undefined context value is if we’re not using the hook within the context provider.
// * So we can throw an error, letting the consumer know that the context is being used incorrectly.
// * This also does the work of narrowing the type: so that the only thing returned from the hook is the fully valid context value.

export function useDefinedContext(contextProp) {
  const context = useContext(contextProp);

  if (context === undefined) {
    throw new Error('context should be used within an context Provider.');
  }

  return context;
}
