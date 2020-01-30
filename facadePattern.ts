@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class AuthComponent implements OnInit {
	loggedUser: string;

	constructor(private facadeService: FacadeService) {}

	ngOnInit() {
		this.loggedUser = this.facadeService.loggedUser('Test User');
	}
}

@Injectable()
export class FacadeService {
	loggedUser(name: string) {
		return localStorage.getItem(name);
	}
}
