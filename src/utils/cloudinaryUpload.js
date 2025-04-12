export const imageUploadFunction = async (array) => {
    const imageUrls = [];

    for (const file of array) {
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'le-zie');
        data.append('cloud_name', 'dmmv6gqnb');

        const res = await fetch('https://api.cloudinary.com/v1_1/dmmv6gqnb/image/upload', {
            method: 'POST',
            body: data
        });
        const uploaded = await res.json();
        imageUrls.push(uploaded.url);
    }

    return imageUrls;
};
