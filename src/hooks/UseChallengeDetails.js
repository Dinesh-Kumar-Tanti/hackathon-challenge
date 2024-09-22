import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getChallengeById } from '../utils/dataStore';

export default function useChallengeDetails() {

    let { challengeId } = useParams();
    const [challengeDetails, setChallengeDetails] = useState(null);

    useEffect(() => {
        if(challengeId) {
            const challengeDetails = getChallengeById(challengeId);
            if(!challengeDetails) {
                window.alert('Invalid Challenge ID');
            } else {
                setChallengeDetails(challengeDetails);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [challengeId]);

    return { challengeDetails };
}