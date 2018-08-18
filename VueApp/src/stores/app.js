export default {
	showMenu : true,
	ready    : false,
	api      : 'http://laravelapi.test/api',

	notifications : [],
	errors        : {},

	addNotification(message, type)
	{
		let notification = {
			id      : _.random(0, 1000),
			message : message,
			type    : type,
		};

		this.notifications.push(notification);

		setTimeout(() => {
			this.notifications.splice(
				this.notifications.indexOf(notification), 1,
			);
		}, 10000);
	},

	addValidationNotification(message, field)
	{
		let notification = {
			id      : _.random(0, 1000),
			message : message,
			field   : field,
			type    : 'validation',
		};

		this.notifications.push(notification);
	},

	closeNotification(notification)
	{
		this.notifications.splice(
			this.notifications.indexOf(notification), 1,
		);
	},
};