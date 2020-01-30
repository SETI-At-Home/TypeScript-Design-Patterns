export class IUser {
	private name: string;
	private age: number;
	private address: string;

	constructor(name: string) {
		this.name = name;
	}

	get Name() {
		return this.name;
	}
	setAge(value: number): IUser {
		this.age = value;
		return this;
	}
	get Age() {
		return this.age;
	}
	setAddress(value: string): IUser {
		this.address = value;
		return this;
	}
	get Address() {
		return this.address;
	}

	build(): User {
		return new User(this);
	}
}

export class User {
	private name: string;
	private age: number;
	private address: string;

	constructor(builder: IUser) {
		this.name = builder.Name;
		this.age = builder.Age;
		this.address = builder.Address;
	}

	get Name() {
		return this.name;
	}
	get Age() {
		return this.age;
	}
	get Address() {
		return this.address;
	}
}

function buildUser(): void {
	var u: User = new IUser('Vladimir')
		.setAge(12)
		.setAddress('Skopje')
		.build();
	console.log(`${u.Name}, ${u.Age}, ${u.Address}`);
}
