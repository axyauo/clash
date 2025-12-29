export const formatError = (error) => {
    const errors = {};
    error.issues.forEach((issue) => {
        const field = issue.path[0];
        errors[field] = issue.message;
    });
    return errors;
};
