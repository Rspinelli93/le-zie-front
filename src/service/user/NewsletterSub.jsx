const apiUrl = import.meta.env.VITE_API_URL;

const NewsletterSub = async (email) => {
    try {
        const response = await fetch(`${apiUrl}/api/subscribe`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
        });

        const data = await response.json();
        
        if (!response.ok) {
        throw new Error(data.error);
        }

        return data;
    } catch (error) {
        console.error("Error in the subscription:", error);
        throw error;
    }
};

export default NewsletterSub;