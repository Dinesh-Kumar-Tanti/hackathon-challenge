import React, { useEffect, useState } from 'react';
import { getAllChallenges } from '../../utils/dataStore';
import imageToBase64 from 'image-to-base64/browser';
import { formatDate, addOneDay } from '../../utils/dateUtils';
import useChallengeDetails from '../../hooks/UseChallengeDetails';
import { Link } from 'react-router-dom';

const CreateChallange = () => {
    const { challengeDetails } = useChallengeDetails();
    const [formData, setFormData] = useState(getAllChallenges());
    const [input, setInput] = useState({
        name: "",
        startDate: "",
        endDate: "",
        description: "",
        image: "",
        level: "Easy"
    });

    const getCurrentDate = () => {
        return Date.now().toString();
    }

    useEffect(() => {
        if (challengeDetails) {
            if (challengeDetails.status === 'past') {
                window.alert('Cannot modify a past event!');
                return;
            }
            setInput({
                name: challengeDetails?.name,
                startDate: challengeDetails?.startDate,
                endDate: challengeDetails?.endDate,
                description: challengeDetails?.description,
                image: challengeDetails?.image,
                level: challengeDetails?.level
            });
        }
    }, [challengeDetails]);

    const currentDate = new Date().toISOString().slice(0, 10);
    const [startDate, setStartDate] = useState(currentDate);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
        if (name === 'startDate') {
            onStartDateChange(e);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (challengeDetails) {
            const updatedChallenges = formData.map((challenge) =>
                challenge.id === challengeDetails.id
                    ? { ...challenge, ...input }
                    : challenge
            );

            setFormData(updatedChallenges);
            localStorage.setItem('challenge', JSON.stringify(updatedChallenges));
            window.alert('Challenge updated successfully!');
        } else {
            const newChallenge = {
                id: getCurrentDate(),
                ...input
            };

            const localData = [newChallenge, ...formData];
            setFormData(localData);
            localStorage.setItem('challenge', JSON.stringify(localData));
            window.alert('Challenge created successfully!');
        }

        setInput({
            name: "",
            startDate: "",
            endDate: "",
            description: "",
            image: "",
            level: "Easy"
        });
    };

    function onFileUpload(e) {
        const file = e.target.files[0];
        if (file) {
            const objectURL = URL.createObjectURL(file);
            imageToBase64(objectURL)
                .then((response) => {
                    setInput({ ...input, image: response });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    const onStartDateChange = (e) => {
        setStartDate(e.target.value);
    };

    return (
        <div className='mb-10'>
            <div className='relative flex items-center pl-[50px] sm:pl-[90px] h-[107px] font-inter font-bold text-2xl leading-[29px] bg-[#F8F9FD]'>
                Challenge Details <span className='absolute invisible sm:visible sm:right-10 md:right-24 xlg:right-40'><Link to='/'><button className=' flex items-center gap-5 border-[2px] px-5 py-3 rounded-[10px] text-slate-600 text-xl hover:bg-slate-200'><img className='w-5 h-5' src="/assets/icons/arrow.png" alt="" />Go Back</button></Link></span>
            </div>
            <div className='pl-[50px] sm:pl-[90px]'>
                <form onSubmit={handleSubmit} className='flex flex-col w-72 gap-2'>
                    <div className='lsm:min-w-[453px] h-[305px] flex flex-col justify-between mt-6'>
                        <div className='flex flex-col gap-5'>
                            <label className='font-inter font-medium leading-[19px]' htmlFor="challange-name">Challenge Name</label>
                            <input className='rounded-md border-[1px] h-10 px-3' type="text"
                                name="name"
                                onChange={handleChange}
                                value={input.name}
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-5'>
                            <label className='font-inter font-medium leading-[19px]' htmlFor="start-date">Start Date</label>
                            <input className='rounded-md border-[1px] h-10 px-3'
                                type="date"
                                placeholder='Add start date'
                                name='startDate'
                                onChange={handleChange}
                                value={input.startDate}
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-5'>
                            <label className='font-inter font-medium leading-[19px]' htmlFor="end-date">End Date</label>
                            <input className='rounded-md border-[1px] h-10 px-3' type="date"
                                placeholder='Add end date'
                                name='endDate'
                                min={input.startDate ? formatDate(addOneDay(new Date(input.startDate))) : currentDate}
                                onChange={handleChange}
                                value={input.endDate}
                                required
                            />
                        </div>
                    </div>

                    <div className='mt-10 flex flex-col gap-5'>
                        <label className='font-inter font-medium leading-[19px]' htmlFor="description">Description</label>
                        <textarea className='rounded-md border-[1px] sm:w-[453px]  lg:w-[817px] lsm:w-[455px] h-[292px] p-3'
                            name="description"
                            onChange={handleChange}
                            value={input.description}
                            required
                        ></textarea>
                    </div>

                    <div className='mt-10 flex flex-col gap-5'>
                        <label className='font-inter font-medium leading-[19px]' htmlFor="image">Image</label>
                        <input
                            className='rounded-[5px] border-[1px] h-[39px] w-[232px]'
                            type="file" accept="image/*"
                            name="image"
                            onChange={onFileUpload}
                            // Only apply "required" when creating a new challenge (no challengeDetails)
                            required={!challengeDetails}
                        />
                        {input.image && <img className="w-[354px] h-[174px] object-cover rounded-t-[8px]" src={`data:image/png;base64, ${input.image}`} alt="" />}
                    </div>


                    <div className='mt-10 flex flex-col gap-5'>
                        <label className='font-inter font-medium leading-[19px]' htmlFor="level">Level Type</label>
                        <select
                            className=' rounded-[5px] font-medium border-[1px] h-[39px] w-[232px] px-4 text-sm'
                            name="level"
                            onChange={handleChange}
                            value={input.level}
                            required
                        >
                            <option className='font-normal rounded-[5px]' value="Easy">Easy</option>
                            <option className='font-normal rounded-[5px]' value="Medium">Medium</option>
                            <option className='font-normal rounded-[5px]' value="Hard">Hard</option>
                        </select>
                    </div>

                    {/* Conditionally render Create or Update button */}
                    <button type='submit' className='my-16 bg-[#44924C] hover:bg-green-700 text-white w-[214px] h-[46px] rounded-[10px] px-[18px] py-[6px] font-medium text-[18px] text-center leading-5'>
                        {challengeDetails ? 'Update Challenge' : 'Create Challenge'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateChallange;
