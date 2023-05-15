import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Adicionar comentários', () => {
        render(<PostComment/>);

        fireEvent.change(screen.getByTestId('textarea-comentario'), {
            target: {
                value: 'Primeiro Comentário',
            }
        });
        fireEvent.click(screen.getByTestId('btn-comentario'));
    
        fireEvent.change(screen.getByTestId('textarea-comentario'), {
            target: {
                value: 'Segundo comentário',
            }
        });
        fireEvent.click(screen.getByTestId('btn-comentario'));

        expect(screen.getAllByTestId('elemento-comentario')).toHaveLength(2);
    });
});