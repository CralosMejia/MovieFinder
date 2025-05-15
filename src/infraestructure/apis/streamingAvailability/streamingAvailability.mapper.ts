// infrastructure/apis/motn/motnMapper.ts
import _ from 'lodash';

type SaApiResponse = any;

export function mapToSimpleMovie(apiMovie: any, countryCode: string = 'ec') {
  const streamingOptions = _.get(apiMovie, ['streamingOptions', countryCode.toLowerCase()], []);

  const platforms = streamingOptions
    .map((opt:any) => _.get(opt, 'service.name'))
    .filter(Boolean);

  return {
    title: _.get(apiMovie, 'title', 'Untitled'),
    description: _.get(apiMovie, 'overview', 'No description'),
    cast: _.compact(_.get(apiMovie, 'cast', [])),
    platforms: _.uniq(platforms),
  };
}