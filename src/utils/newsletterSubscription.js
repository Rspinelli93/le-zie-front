import NewsletterSub from '../service/user/NewsletterSub';

export const subscribeToNewsletter = async (email) => {
    if (!email || email.trim() === '') {
        alert('Please enter an email address');
        return false;
    }
    
    try {
        await NewsletterSub(email);
        alert('You have subscribed successfully!');
        return true;
    } catch (error) {
        alert(error.message);
        return false;
    }
};