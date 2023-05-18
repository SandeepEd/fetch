import { DependencyList, useEffect, useState } from 'react';
import { QueryObserverResult } from 'react-query';

export function useAsyncEffect<I, O>(
  callBack?: (props: I) => QueryObserverResult<O>,
  propQuery?: I,
  dependencies?: DependencyList,
) {

  // Runs the callback each time deps change
  useEffect(() => {
    propQuery && setQuery(propQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  const [ query, setQuery ] = useState(propQuery);

  const searchQuery = query && callBack?.(query);

  return searchQuery;
}
