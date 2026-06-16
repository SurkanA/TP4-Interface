import { TestBed } from '@angular/core/testing';
import { App } from './app';

// Test unitarios para el formulario, verifica que se crea la aplicacion,
// que empiece con valores vacios, que un formulario bien hecho se pueda mandar y viceversa.
describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialize contact form with empty values and default preferred contact method', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app.contactForm).toBeTruthy();
    expect(app.contactForm.get('name')?.value).toBe('');
    expect(app.contactForm.get('email')?.value).toBe('');
    expect(app.contactForm.get('telephone')?.value).toBe('');
    expect(app.contactForm.get('topic')?.value).toBe('');
    expect(app.contactForm.get('message')?.value).toBe('');
  });

  it('should validate form correctly', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    const nameControl = app.contactForm.get('name');
    const emailControl = app.contactForm.get('email');
    const telephoneControl = app.contactForm.get('telephone');
    const topicControl = app.contactForm.get('topic');
    const messageControl = app.contactForm.get('message');

    nameControl?.setValue('John Doe');
    emailControl?.setValue('johndoe@gmail.com');
    telephoneControl?.setValue('2494302875');
    topicControl?.setValue('general');
    messageControl?.setValue(
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, sunt voluptatem id ipsum deleniti at quibusdam, dolor saepe tempora excepturi omnis rerum obcaecati labore ut tenetur assumenda dolorum repellat nobis.',
    );

    expect(nameControl?.valid).toBeTruthy();
    expect(emailControl?.valid).toBeTruthy();
    expect(telephoneControl?.valid).toBeTruthy();
    expect(topicControl?.valid).toBeTruthy();
    expect(messageControl?.valid).toBeTruthy();
    expect(app.contactForm.valid).toBeTruthy();
  });

  it('should validate form with invalid values', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    const nameControl = app.contactForm.get('name');
    const emailControl = app.contactForm.get('email');
    const telephoneControl = app.contactForm.get('telephone');
    const topicControl = app.contactForm.get('topic');
    const messageControl = app.contactForm.get('message');

    nameControl?.setValue('a');
    emailControl?.setValue('invalidemail');
    telephoneControl?.setValue('0');
    // No se puede manipular la información del tópico, así que cualquier opción es válida.
    topicControl?.setValue('general');
    messageControl?.setValue('empty');

    expect(nameControl?.valid).toBeFalsy();
    expect(emailControl?.valid).toBeFalsy();
    expect(telephoneControl?.valid).toBeFalsy();
    expect(topicControl?.valid).toBeTruthy();
    expect(messageControl?.valid).toBeFalsy();
    expect(app.contactForm.valid).toBeFalsy();
  });
});
