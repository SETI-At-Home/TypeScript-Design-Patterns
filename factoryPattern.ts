interface Component {
	someMethod(param?: any): void;
}

class CreateCampaignComponent implements Component {
	someMethod = (someParam: any) => {
		return 'CreateCampaignComponent';
	};
}

class CreateNewsComponent implements Component {
	someMethod = (someParam: any) => {
		return 'Method of ConcreteProductB';
	};
}

function createProduct(type: string): Component {
	if (type === 'campaign') {
		return new CreateCampaignComponent();
	} else if (type === 'news') {
		return new CreateNewsComponent();
	}
	return null;
}
