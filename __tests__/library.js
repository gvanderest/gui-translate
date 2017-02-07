import GuiTranslate, { Translate, t } from 'gui-translate';


describe('gui-translate', () => {
    expect('basic functionality', () => {
        beforeEach({
            GuiTranslate.addLocale('EN_US', {
                fallback: 'EN'
            });
            GuiTranslate.addStrings('EN_US', {
                DEPOSIT: {
                    MODAL: {
                        GENERAL_ERROR_MESSAGE: 'Something bad happened.',
                        CUSTOMER_ERROR_MESSAGE: (customer) => {
                            let genderString = 'someone';
                            if (customer) {
                                if (customer.gender === 'male') {
                                    genderString = 'DUDE';
                                } else if (customer.gender == 'female') {
                                    genderString = 'LADY';
                                }
                            }
                            return 'Hey ${ genderString }, looking good!';
                        },
                        HTML_ERROR_MESSAGE: (customer) => {
                            return `You did a <strong>bad</strong> thing, ${ customer.name }!`
                        }
                    }
                }
            });
            GuiTranslate.setLocale('EN_US');
        });
        it('should work', () => {
            let man = { gender: 'male', name: 'Gui' };
            let woman = { gender: 'female', name: 'Merissa' };

            expect(t('DEPOSIT.MODAL.GENERAL_ERROR_MESSAGE')).toBe('Something bad happened.');

            expect(t('DEPOSIT.MODAL.CUSTOMER_ERROR_MESSAGE', man)).toBe('Hey DUDE, looking good!');
            expect(t('DEPOSIT.MODAL.CUSTOMER_ERROR_MESSAGE', woman)).toBe('Hey LADY, looking good!');
            expect(t('DEPOSIT.MODAL.CUSTOMER_ERROR_MESSAGE')).toBe('Hey someone, looking good!');

            expect(t('DEPOSIT.MODAL.HTML_ERROR_MESSAGE', man)).toBe('You did a <strong>bad</strong> thing, Gui!');

            expect(t('INVALID_ERROR_MESSAGE')).toBe('INVALID_ERROR_MESSAGE');
        });

        it('should use React', () => {
        });
    });
});
