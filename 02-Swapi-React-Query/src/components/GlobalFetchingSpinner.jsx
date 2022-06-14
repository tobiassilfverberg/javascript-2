import BounceLoader from 'react-spinners/BounceLoader'
import { useIsFetching } from 'react-query'

const GlobalFetchingSpinner = () => {
	const isFetching = useIsFetching()

	return isFetching ? (
		<div id="fetching-spinner">
			<BounceLoader size={40} color="#d3751d" />
		</div>
	) : null
}

export default GlobalFetchingSpinner
