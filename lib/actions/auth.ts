'use server'

export const signUp = async (params) => {
  const { fullName, email, password, universityId, userName } = params

  const existingUser = await fetch('http://localhost:5328/api/users/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      full_name: fullName,
      username: userName,
      email,
      password,
      university_id: universityId,
      role: 'user'
    })
  })

  return await existingUser.json()
}
