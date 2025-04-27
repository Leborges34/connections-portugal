
-- Adiciona campo email à tabela user_profiles se ainda não existir
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = 'user_profiles' 
        AND column_name = 'email'
    ) THEN
        ALTER TABLE public.user_profiles ADD COLUMN email TEXT;
    END IF;
END
$$;

-- Adiciona campo email à tabela partner_profiles se ainda não existir
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = 'partner_profiles' 
        AND column_name = 'email'
    ) THEN
        ALTER TABLE public.partner_profiles ADD COLUMN email TEXT;
    END IF;
END
$$;

-- Adiciona índice para email em user_profiles
CREATE INDEX IF NOT EXISTS user_profiles_email_idx ON public.user_profiles (email);

-- Adiciona índice para email em partner_profiles
CREATE INDEX IF NOT EXISTS partner_profiles_email_idx ON public.partner_profiles (email);
