import React from 'react'

function Profile() {
    const [profile, setProfile] = React.useState({});
    const fetchUser = async () => {
        try {
            const response = await fetch('http://localhost:5000/auth/profile', {
                method: 'GET',
                headers: {
                    'auth-token': localStorage.getItem('token'),
                },
            });
            const data = await response.json();
            setProfile(data);
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    React.useEffect(() => {
        fetchUser();
    }, []);
  return (
    <div>
    <div class="container mx-auto my-10">
        <div>

            <div class="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
                <div class="flex justify-center">
                        <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"/>
                </div>
                
                <div class="mt-16">
                    <h1 class="font-bold text-center text-3xl text-gray-900">{profile.name}</h1>
                    
                    
                    

                    <div class="w-full">
                        <h3 class="font-medium text-gray-900 text-left px-6">Profile Details</h3>
                        <div class="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                            <p class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2"/>
                                    <b>Email</b> : {profile.email}
                            </p>

                            <p class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2"/>
                                    <b>Mobile Number</b> : {profile.mobile}
                            </p>

                            <p class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2"/>
                                <b>Address</b> : {profile.address}
                            </p>

                            <p class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2"/>
                                <b>Resume</b> : <a 
                                target='_blank'
                                href={`http://localhost:5000/${profile.resume}`
                                }>Click here to see resume</a>

                            </p>

                            
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </div>
  )
}

export default Profile